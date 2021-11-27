'use strict';




module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('colors', [{
        name: 'cerulean',
        year: 2000,
        color: '#98B2D1',
        pantone_value: '15-4020',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'fuchsia rose',
        year: 2001,
        color: '#C74375',
        pantone_value: '17-2031',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'true red',
        year: 2002,
        color: '#BF1932',
        pantone_value: '19-1664',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'aqua sky',
        year: 2003,
        color: '#7BC4C4',
        pantone_value: '14-4811',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'tigerlily',
        year: 2004,
        color: '#E2583E',
        pantone_value: '17-1456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'blue turquoise',
        year: 2005,
        color: '#53B0AE',
        pantone_value: '15-5217',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'sand dollar',
        year: 2006,
        color: '#DECDBE',
        pantone_value: '13-1106',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'chili pepper',
        year: 2007,
        color: '#9B1B30',
        pantone_value: '19-1557',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'blue iris',
        year: 2008,
        color: '#5A5B9F',
        pantone_value: '18-3943',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'mimosa',
        year: 2009,
        color: '#F0C05A',
        pantone_value: '14-0848',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'turquoise',
        year: 2010,
        color: '#45B5AA',
        pantone_value: '15-5519',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'honeysuckle',
        year: 2011,
        color: '#D94F70',
        pantone_value: '18-2120',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('colors', null, {});
  }
};
