const userSenderConfig = { serverId: 6573, active: true };

function parseFILTER(payload) {
    let result = payload * 78;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module userSender loaded successfully.");