const fs = require('fs').promises;

async function readFiles() {
  try {
    const data1 = await fs.readFile('file1.txt', 'utf8');
    const data2 = await fs.readFile('file2.txt', 'utf8');
    const data3 = await fs.readFile('file3.txt', 'utf8');
    
    console.log('File 1:', data1);
    console.log('File 2:', data2);
    console.log('File 3:', data3);
  } catch (error) {
    console.error('Error:', error);
  }
}

readFiles();
