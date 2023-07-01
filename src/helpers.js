export const generateDataArray = (count, filter) => {
  const dataArray = Array(count)
    .fill()
    .map((_, index) => ({
      id: index + 1,
      photoUrl: "https://source.unsplash.com/random/350x240",
      description: `Photo ${index + 1}`,
      email: `email${Math.floor(Math.random() * 5) + 1}@example.com`,
      coordinates: {
        latitude: Math.random() * 180 - 90,
        longitude: Math.random() * 360 - 180,
      },
      coordinateName: `Location ${index + 1}`,
      emails: Array(Math.floor(Math.random() * 5) + 1)
        .fill()
        .map((_, i) => `email${i + 1}@example.com`),
      comments: Array(Math.floor(Math.random() * 3))
        .fill()
        .map((_, i) => ({
          email: `commenter${i + 1}@example.com`,
          avatarUrl: "https://source.unsplash.com/random/28x28/?logo",
          date: "2023-06-30",
          comment: `Comment ${i + 1}`,
        })),
    }));
  if (filter === "") {
    return dataArray;
  } else {
    return dataArray.filter((item) => item.email === filter);
  }
};
