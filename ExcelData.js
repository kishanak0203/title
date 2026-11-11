import XLSX from 'xlsx';

export function readExcelData() {
  const workbook = XLSX.readFile('./utils/LoginData.xlsx');
  const worksheet = workbook.Sheets['Sheet1'];
  const data = XLSX.utils.sheet_to_json(worksheet);
  data.forEach((value)=>{
   console.log(value.Username)

  })
  
}

readExcelData();
