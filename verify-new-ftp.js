import ftp from 'basic-ftp';

async function testConnection() {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    try {
        await client.access({
            host: "147.93.14.87",
            user: "u786839041.Jhsite",
            password: "1q2w3e4r@@@SK",
            port: 21,
            secure: false
        });
        
        console.log("Conectado com sucesso!");
        const pwd = await client.send("PWD");
        console.log("Diretório de login (PWD):", pwd);
        
        const list = await client.list();
        console.log("Arquivos listados no diretório atual:");
        console.log(list.map(f => `${f.name} (${f.type === 1 ? 'Arquivo' : 'Diretório'})`).join('\n'));
        
    } catch (err) {
        console.error("Erro na verificação do FTP:", err);
    } finally {
        client.close();
    }
}

testConnection();
