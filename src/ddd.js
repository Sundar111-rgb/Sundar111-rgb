const data = {
    "status": "2000",
    "data": {  "message": " ",  
                      "resource": {
            "Fixed Headers": {
                "pi": {
                    "indentNo": "Indent No",
                   "slCode": "Supplier Code",
                    "slName": "Supplier Name",
                    "slAddr": "Supplier Address",
                    "uuid": "UUID",
                    "remark": "Remark"
                }
            }
        } 
     }
}
const data1 = Object.entries(data.data.resource['Fixed Headers'].pi)
  console.log(data1);
    data1.map((item,i) => 
                   {
                      console.log(item[i])
                    }
                   )