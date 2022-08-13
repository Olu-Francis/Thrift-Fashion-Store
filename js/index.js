const name = prompt("Please enter your First Name");

let displayMessage = function () {
    let welcomemessage = '.wm';
    let html = 'Welcome %Daniel% to Thrift Fashion Store, you entered %0000% mins ago.'

    if (name) {
        let newHtml = html.replace('%Daniel%', name);
        // alert( 'Welcome ' + name + ' to Thrift Fashion Store, you\'ve been here for' + TimeRanges + '.');
        welcomemessage = newHtml;
        console.log(newHtml);
    }

}
displayMessage();