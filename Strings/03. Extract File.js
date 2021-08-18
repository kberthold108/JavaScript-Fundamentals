function main(input) {
    const fileNameStart = input.lastIndexOf("\\") + 1;
    const fileNameEnd = input.lastIndexOf(".");
    const fileName = input.substring(fileNameStart, fileNameEnd);
    const fileExtension = input.substring(fileNameEnd + 1);
    console.log(`File name: ${fileName} \nFile extension: ${fileExtension}`); 

}


main("C:\\Internal\\training-internal\\Template.pptx");