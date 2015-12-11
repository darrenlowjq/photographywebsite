function ifttt(firstName,lastName,emailAddress,phoneNumber,message) {
    
    var name = string.concat(firstName," ",lastName);
    
    if (phoneNumber.length > 0) {
        var newMessage = string.concat("Phone Number = ",phoneNumber," Message = ",message)
    } else {
        var newMessage = message
    };
    
    var newRequest = new XMLHttpRequest();
    newRequest.open("POST","https://maker.ifttt.com/trigger/website_message/with/key/bpmhuL3O60Wea8eKAeX0Kn",true);
    newRequest.setRequestHeader("Content-Type","application/json");
    newRequest.send({ "Name" : name, "Email" : emailAddress, "Message" : newMessage });
    
}

function test() {
    return "Hello World";
}
