const courseContent = [
    {
      time: '5:35 mins',
      title: 'Welcome to the Course',
    },
    {time: '7:35 mins', title: 'Design Thinking - Intro'},
    {time: '10:35 mins', title: 'Design Thinking Process'},
    {time: '5:35 mins', title: 'Customer Perspective'},
  ];

  const courses = [
    {
      id: 1,
      name: 'Succulent Plant',
      totalCourse: '39.99',
      students: true,
      img: require('../../../../../assets/plant1.png'),
      about:
        'Succulent Plantis one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.',
    },
  
    {
      id: 2,
      name: 'Dragon Plant',
      totalCourse: '29.99',
      students: false,
      img: require('../../../../../assets/plant1.png'),
      about:
        'Dragon Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.',
    },
    {
      id: 3,
      name: 'Ravenea Plant',
      totalCourse: '25.99',
      students: false,
      img: require('../../../../../assets/plant1.png'),
      about:
        'Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.',
    },
  
    {
      id: 4,
      name: 'Potted Plant',
      totalCourse: '25.99',
      courseContent,
      students: true,
      img: require('../../../../../assets/plant1.png'),
      about:
        'Potted Plant Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.',
    },
    {
      id: 5,
      name: 'Ravenea Plant',
      courseContent,
      totalCourse: '50.99',
      students: true,
      img: require('../../../../../assets/plant1.png'),
      about:
        'Potted Plant Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.',
    },
    {
      id: 6,
      courseContent,
      name: 'Dragon Plant',
      totalCourse: '50.99',
      students: false,
      img: require('../../../../../assets/plant1.png'),
      about:
        'Potted Plant Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.',
    },
  ];
  
  export default courses;
  