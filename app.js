//make array of proctor objects
//make random sorter
//check exam day with department and filter, DONE
//check if someone is part and filter them from possibleProcs, 
//OR: add procAssignments as keys, but limit number/day added if part

//4 math (2f, 2p)
//3Eng (2f, 1p)
//4the (3f, 1p)
let proctors = [
    {
        name: 'O\'Halloran',
        department: 'math',
        status: 'full'
    },
    {
        name: 'Bravo',
        department: 'math',
        status: 'full'
    },
    {
        name: 'Erdman',
        department: 'math',
        status: 'part'
    },
    {
        name: 'Acosta',
        department: 'math',
        status: 'part'
    },
    {
        name: 'J',
        department: 'English',
        status: 'full'
    },
    {
        name: 'K',
        department: 'theology',
        status: 'full'
    },
    {
        name: 'L',
        department: 'English',
        status: 'full'
    },
    {
        name: 'M',
        department: 'theology',
        status: 'part'
    },
    {
        name: 'N',
        department: 'English',
        status: 'part'
    },
    {
        name: 'O',
        department: 'theology',
        status: 'full'
    },
    {
        name: 'P',
        department: 'theology',
        status: 'full'
    },
];



const filterOwnDeptProctors = (arr, todaysExam)=> {
    const filterArr = arr.filter(proctor=> {
        return proctor.department !== todaysExam;
    });
    return filterArr;
}
//TEST (returns only non-math): filterOwnDeptProctors(proctors, 'math'); 

const makeProctorAssignments = (arr)=> {
    //filter out same-depts
    //filterOwnDeptProctors(arr);

    //filter/limit number of part-time assignments
    //randomly assign those remaining

}

let testArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n'];

const arrayShuffle = (arr)=> {
  
    for(let i = 0; i<arr.length; i++) {
      for(let j = i; j<arr.length; j++) {
        let temp;
        //random index
        j = Math.floor(Math.random()*(arr.length));
        
        //each item assigned to temp
        temp = arr[i];
        //each item now equals random spot in array
        arr[i] = arr[j];
        //randomSpot now reset to temp
        arr[j] = temp;
        
        console.log(`arr${i} was at ${arr.indexOf(arr[i])}`);
        console.log(`arr${i} changed to ${arr.indexOf(arr[j])}`);
      }
    }
    return arr;
}

arrayShuffle(testArr);