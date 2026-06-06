import ftp from 'basic-ftp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function upload() {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    try {
        await client.access({
            host: "147.93.14.87",
            user: "u786839041.olivedrab-flamingo-236004.hostingersite.com",
            password: "1q2w3e4r@@@SK",
            port: 21,
            secure: false
        });
        
        console.log("Conectado ao FTP principal com sucesso!");
        
        // Caminho local da pasta dist
        const localFolder = path.join(__dirname, 'dist');
        // Subindo direto na raiz `/` deste usuário FTP
        const remoteFolder = "/";
        
        console.log(`Iniciando upload de ${localFolder} para ${remoteFolder}...`);
        await client.uploadFromDir(localFolder, remoteFolder);
        console.log("Upload na raiz FTP concluído com sucesso!");
        
    } catch (err) {
        console.error("Erro no upload FTP:", err);
    } finally {
        client.close();
    }
}

upload();
