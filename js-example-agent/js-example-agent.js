const API = "http://localhost:8000/"

async function getDataFromAPI(api_url) {
    try {
      let response = await fetch(api_url);

      if (!response.ok) 
        throw new Error(`Network response was not ok ${response.statusText}`);

      return response.json();
    } catch (error) {
      console.error(` Error: ${error}`);
    }
}

function transformData(data) {

    let resultArray = [];
    for (const key in data.fields) {
        if (data.fields.hasOwnProperty(key)) {
            resultArray.push({
                [`${data.name}_${key}`]: data.fields[key]
            });
        }
    }

    return resultArray;
}

function checkValues(dataArray) {
    const values = dataArray.reduce((acc, item) => {
        if (item.test_key_1) acc.testKey1Value = item.test_key_1;
        if (item.test_key_2) acc.testKey2Value = item.test_key_2;
        if (item.test_key_3) acc.testKey3Value = item.test_key_3;
        return acc;
    }, { testKey1Value: null, testKey2Value: null, testKey3Value: null });

    const { testKey1Value, testKey2Value, testKey3Value } = values;

    if (testKey1Value === 'val_1' && testKey2Value === 'val_2') return "M1";
    if (testKey1Value === 'val_12') return "M3";
    if (testKey1Value === 'val_1') return "A1";
    if (testKey2Value === 'val_2') return "V1";
    if (testKey3Value === 'val_3') return "G1";

    return null;
}

function main(data){
    let transformed_data = transformData(data)
    return checkValues(transformed_data)
}

function run(){
    getDataFromAPI(API)
        .then(data => {
            if (!data) 
                console.log('Failed to fetch data');

            let code = main(data);
            console.log(`Код: ${code}`)
    });
}

if(require.main === module)
    run()

module.exports = { 
    transformData,
    checkValues,
    main 
};
