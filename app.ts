const num1Element=document.getElementById('num1')as HTMLInputElement
const num2Element=document.getElementById('num2')as HTMLInputElement
const buttonElement=document.querySelector('button')!
const numResults:number[]=[];
const TextResults:string[]=[];

function add(num1:number | string,num2:number | string)
{
    if(typeof num1==='number' && typeof num2==='number')
    {
        return num1 +num2;
    }
else if(typeof num1==='string' && typeof num2==='string' )
{
    return num1+num2;

}
return +num1 + +num2
}
function printResult(resultObj:{value:number;timestamp:Date})
{
    console.log(resultObj.value)
}

buttonElement.addEventListener('click',()=>{
    const num1=num1Element.value
    const num2=num2Element.value
    const result=add(+num1,+num2)

    numResults.push(result as number)
    const stringresult=add(num1,num2)

    TextResults.push(stringresult as string)
    console.log(numResults,stringresult)

    printResult({value:result as number,timestamp:new Date()})

})