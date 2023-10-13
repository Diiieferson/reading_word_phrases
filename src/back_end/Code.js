function doGet() {
    return HtmlService.createTemplateFromFile('src/front_end/index.html').evaluate()
}


/**
 * @function - includes the files scripts and css files
 *
 * @param {string} file - The file to be included
 * @return {*}  
 */
function include(file) {
    return HtmlService.createHtmlOutputFromFile(file).getContent()
}

/**
 *
 * @function - save data to file
 * @param {string} data1 - The first data to be saved
 * @param {string} data2 - The second data to be saved
 * @return {*} 
 */
function saveData(data1, data2) {
    var datas = []
    const ss = SpreadsheetApp.openById('1R914JP66ffGgI7xaUnpbqiXDJv-kxQ7VIIL46JJgV-k')
    const sheet = ss.getSheetByName('data_entry')
    const rangeA2 = sheet.getRange('A2')
    const rangeB2 = sheet.getRange('B2')

    rangeA2.setValue(data1)
    rangeB2.setValue(data2)
    datas.push(data1)
    datas.push(data2)

    return datas

}
