// describe("Esto es una suite de pruebas", () =>{
//     test('Caso de prueba 1', () =>{
//         const result = 1 + 2
//         expect(result).toBe(3);
//     });
// });

const MissionCommander = require("../app/missionCommander");

//Prueba de la clase
describe("Unit test for MissionCommander Class", () =>{
    test('1) Create a mission Commander object', ()=>{
        const myMissionCommander = new MissionCommander('Woopa')
        expect(myMissionCommander.name).toBe('Woopa');
    });
});