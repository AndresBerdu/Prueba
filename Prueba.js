const namelist = [
    {
        name:"Violet",
        lastname:"Cannon"
    },
    {
        name:"Nancy",
        lastname:"Rice"
    },
    {
        name:"Mcneil",
        lastname:"Mcgee"
    },
    {
        name:"Greta",
        lastname:"Mccall"
    },
    {
        name:"Loretta",
        lastname:"Dorson"
    }
];

namelist.forEach(function(element){
    element = element.name +" "+ element.lastname
    console.log(element);
})