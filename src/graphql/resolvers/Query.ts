const Query = {
    ping(__: void,{arg} : {arg: String}): string {
        return `pong!, ${arg}` 
    },
    messages: (__: void,{arg} : {arg: String}): string => {
        return `MENSAJE RANDOM WITH ${arg}`  // Get all messages
    }
}


export default Query;