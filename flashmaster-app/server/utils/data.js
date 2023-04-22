const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
  }
  
  module.exports = {
    ROLE: ROLE,
    users: [
      { id: 101, name: "Alberto Harrison", role: ROLE.ADMIN },
      { id: 102, name: "Abigail Carter", role: ROLE.ADMIN },
      { id: 103, name: "Allen Barber", role: ROLE.ADMIN },
      { id: 104, name: "Brenda Wang", role: ROLE.ADMIN },
      { id: 105, name: "Betty Hansen", role: ROLE.ADMIN },
      { id: 106, name: "Cathy Johnson", role: ROLE.ADMIN },
      { id: 107, name: "Cindy Rogers", role: ROLE.ADMIN },
      { id: 108, name: "Jack Webster", role: ROLE.ADMIN },
      { id: 109, name: "Rob Williams", role: ROLE.ADMIN },
      { id: 110, name: "Jenny Swift", role: ROLE.ADMIN },
      { id: 3, name: 'Joe', role: ROLE.BASIC }
      { id: 3, name: 'Joe', role: ROLE.BASIC }
      { id: 3, name: 'Joe', role: ROLE.BASIC }
      { id: 3, name: 'Joe', role: ROLE.BASIC }
      { id: 3, name: 'Joe', role: ROLE.BASIC }
      { id: 3, name: 'Joe', role: ROLE.BASIC }
      { id: 3, name: 'Joe', role: ROLE.BASIC }
      { id: 3, name: 'Joe', role: ROLE.BASIC }
      { id: 3, name: 'Joe', role: ROLE.BASIC }
    ],
    projects: [
      { id: 1, name: "Kyle's Project", userId: 1 },
      { id: 2, name: "Sally's Project", userId: 2 },
      { id: 3, name: "Joe's Project", userId: 3 }
    ]
  }