s='hi i am pratham'
s=s.split(" ")

for(i of s){

    i=i.split("")
    // console.log(i)
    for(i1 of i){
        // console.log(i1)
        if(i1=='a'||i1=='e'||i1=='i'||i1=='o'||i1=='u'){
            console.log(`vowel is ${i1} `)

        }
    }
}