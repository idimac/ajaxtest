var AjaxTest = (function () {
    document.querySelector('.AjSend').addEventListener('click', function () {
        new AjaxTest();
    });

    function AjaxTest () {
        var request = new XMLHttpRequest();
        request.data = {textFromInput: document.querySelector('.AjSendInput').value};
        request.onreadystatechange = function () {
            if(request.readyState == 4 && request.status == 200) {
                document.querySelector('.returnedTextP').innerHTML = request.responseText;
            }
        };
        
        request.open('POST', 'server.php');
        request.send();
    }


    return AjaxTest;
})()