const topCont = document.querySelector('.top');
const listOfTextArea = topCont.querySelectorAll('textarea');

listOfTextArea.forEach((item)=>{
    item.addEventListener('keyup',()=>{
        const html =  document.getElementById('htmlCode').value;
        const css =  document.getElementById('cssCode').value;
        const js =  document.getElementById('jsCode').value;
        const output = document.getElementById('output');
        output.contentDocument.body.innerHTML = html + "<style>" + css + "</style>"; //* bug
        console.log(output.contentDocument.body);
        output.contentWindow.eval(js);
    })
})

