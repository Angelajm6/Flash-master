const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
  }
  
  module.exports = {
    ROLE: ROLE,
    users: [
    // Teachers
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
      
      // Students
      { id: 201, name: "Tommy Pickles", role: ROLE.BASIC },
      { id: 202, name: "Dexter McPherson", role: ROLE.BASIC },
      { id: 203, name: "Jimmy Neutron", role: ROLE.BASIC },
      { id: 204, name: "Helga Pataki", role: ROLE.BASIC },
      { id: 205, name: "Harry Potter", role: ROLE.BASIC },
      { id: 206, name: "D.W. Read", role: ROLE.BASIC },
      { id: 207, name: "Louise Belcher", role: ROLE.BASIC },
      { id: 208, name: "Angelica Pickles", role: ROLE.BASIC },
      { id: 209, name: "Johnny Bravo", role: ROLE.BASIC },
      { id: 210, name: "Charlie Brown", role: ROLE.BASIC }
    ],

    // Flash Decks 
    projects: [
      { id: 101, name: ["American Revolution", "Titanic", "Civil War", "The Boxer Rebellion", "WW1"], userId: 101 },
      { id: 102, name: ["The Great Gatsby", "The Grapes of Wrath", "To Kill a Mockingbird", "Catcher in the Rye", "Little Women"], userId: 102 },
<<<<<<< HEAD
      { id: 103, name: ["Algebra 1", "Calculus 1", "Geometry", "Algebra 2", "AP Calculus"], userId: 103 },
=======
      { id: 103, name: ["Algebra 1", "Calculus 1", "Geometry", "Algebra 2", " AP Calculus"], userId: 103 },
>>>>>>> main
      { id: 104, name: ["Physics 1", "Biology", "Chemistry", "AP Chem", "AP Biology"], userId: 104 },
      { id: 105, name: ["MLA Citation", "Grammar", "Sentence Structure", "Composition", "Research"], userId: 105 },
      { id: 106, name: ["Supply & Demand", "Trickle Down Economics", "The Great Depression", "Inflation", "Economic Laws"], userId: 106 },
      { id: 107, name: ["French Grammar", "Conjugations", "French Verbs", "French Adjectives", "Conversation"], userId: 107 },
      { id: 108, name: ["Constitutional Convention", "The Bill of Rights", "Separation of Powers", "Legislative Branch", "Judicial Branch"], userId: 108 },
      { id: 109, name: ["Civil Rights", "Jim Crow", "Segregation", "Civil War", "Pearl Harbor"], userId: 109 },
      { id: 110, name: ["Nutrition", "Disease", "Viruses", "Bacteria", "SexEd"], userId: 110 },
<<<<<<< HEAD
    ],
    
=======
    ],    
>>>>>>> main
  }