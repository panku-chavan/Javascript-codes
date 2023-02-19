// - Given an object of student grades and their marks in the mentioned below format, print the highest scored student for each grade along with the total
// - Sample Input

// ```

// - Sample Output

// ```
// V-Prateek-90
// VI-Albert-90
// VII-Sandhya-90
// ```
let arr=[
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
];



function Print(info){
  let grade = info.grade;
  let name;
  let max=-Infinity;
  let result="";
    let arr=info.students;
  for(let i=0;i<arr.length;i++){
    let marks=arr[i].marks;
    let total=0;
    for(let i=0;i<marks.length;i++){
      total += marks[i];
    }
    if(total>max){
      max= total;
      name= info.students[i].name;
    }
  }
  result=grade+"-"+name+"-"+max;
  return result;
}
for(let i=0;i<arr.length;i++){
  console.log(Print(arr[i]));
}
