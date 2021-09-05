const arr = [
    [
        {VALUE1: 'test', VALUE2: null, VALUE3: null}
    ], 
    [
        {VALUE1: null, VALUE2: null, VALUE3: null}
    ], 
    [
        {VALUE1: null, VALUE2: null, VALUE3: null}
    ]
];

isNullCheck();
function isNullCheck(){
    let isNull = [];
    for(let i=0; i<arr.length; i++){
        const isEmpty = Object.values(arr[i][0]).every(x => x === null);
        isNull.push(isEmpty);
    }
    const rest = isNull.every( (val, i, arr) => val === true );
    showTr(rest);
}

function showTr(res){
    if(res === false){
        for(let i=0; i<arr.length; i++){
            Object.keys(arr[i][0]).forEach(function(key) {
                if(arr[i][0][key] === null) {
                    arr[i][0][key] = 'N/A';
                }
            })
            console.log(arr[i][0]);
        }
    }else{
        console.log('All null');
    }
}