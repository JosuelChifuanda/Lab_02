from flask import Flask, send_from_directory, request, render_template_string, abort
import os
import logging

app = Flask(__name__, static_folder='client_build', static_url_path='')

# Configurar logging
logging.basicConfig(level=logging.DEBUG)

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

# Rota para robots.txt com verificação explícita
@app.route("/robots.txt")
def robots():
    robots_path = os.path.join(app.static_folder, "robots.txt")
    app.logger.debug(f"Tentando acessar robots.txt em: {robots_path}")
    
    if not os.path.exists(robots_path):
        app.logger.error("Arquivo robots.txt não encontrado!")
        abort(404)
    
    return send_from_directory(app.static_folder, "robots.txt")

# Rotas para poemas (mantidas como no original)
@app.route('/poem1')
def serve_poem1():
    return send_from_directory(os.path.join('challenges', 'Poem1'), 'Poem1.html')

@app.route('/poem1/.git/<path:filename>')
def git_access(filename):
    return send_from_directory(os.path.join('challenges', 'Poem1', '.git'), filename)

@app.route('/poem2', methods=['GET', 'POST'])
def xss_challenge():
    if request.method == 'POST':
        return render_template_string(f'<output>{request.form["input"]}</output>')
    return send_from_directory(os.path.join('challenges', 'Poem2'), 'poem2.html')

@app.route('/poem3')
def serve_poem3():
    try:
        return send_from_directory(os.path.join('challenges', 'Poem3'), 'poem3.html')
    except FileNotFoundError:
        app.logger.error('Arquivo poem3.html não encontrado em challenges/Poem3')
        abort(404)

# Rota catch-all deve vir por último
@app.route('/<path:path>')
def static_files(path):
    file_path = os.path.join(app.static_folder, path)
    
    if os.path.exists(file_path):
        app.logger.debug(f"Arquivo estático encontrado: {file_path}")
        return send_from_directory(app.static_folder, path)
    
    app.logger.debug(f"Arquivo não encontrado, servindo index.html para: {path}")
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5555)
