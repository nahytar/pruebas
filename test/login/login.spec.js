// import login from '../../src/login/login'
// import config from '../../src/core/config'

// jest.mock('../../src/core/config')

// let startMock = jest.fn()

// global.firebase = {
//   auth: jest.fn().mockReturnValue('Valor mockeado')
// }

// global.firebaseui = {
//   auth: {
//     AuthUI: jest.fn().mockImplementation(() => {
//       return {
//         start: startMock
//       }
//     })
//   }
// }

// describe('Login', () => {
//   describe('show', () => {
//     beforeEach(() => {
//       startMock = jest.fn()
//       config.getLoginConfig = jest.fn().mockReturnValue("Configuracion mokeada")
//     })
//     afterEach(() => {
//       startMock.mockClear()
//       config.getLoginConfig.mockClear()
//     })
//     test('debe iniciar el login ui', () => {
//       login.show();

//       expect(startMock).toBeCalled()
//     })
//   })
// })