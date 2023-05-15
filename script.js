const topCont = document.querySelector('.top');
const listOfTextArea = topCont.querySelectorAll('textarea');
listOfTextArea.forEach((item)=>{
    item.addEventListener('keyup',function(){

/* This code is setting up an event listener on each textarea element in the HTML document. When a user
types something into one of the textareas, the code retrieves the values of the HTML, CSS, and
JavaScript code from their respective textarea elements. It then updates the content of the output
element with the HTML code, applies the CSS code to the output element's head, and evaluates the
JavaScript code in the output element's window. This allows the user to see the result of their code
in real-time as they type. */

       const html =  document.getElementById('htmlCode').value;
       const css =  document.getElementById('cssCode').value;
       const js =  document.getElementById('jsCode').value;
       const output = document.getElementById('output');

        output.contentDocument.body.innerHTML = html;
        output.contentDocument.head.innerHTML = "<style>" + css + "</style>" ;
        output.contentWindow.eval(js);
    })
})

