import { v4 as uuidv4 } from "uuid";
const categories = [
  "nature",
  "fruit",
  "animals",
  "landscape",
  "food",
  "flowers",
  "city",
  "ocean",
  "mountain",
  "beach",
  "sunrise",
  "sunset",
  "wildlife",
  "architecture",
  "travel",
  "people",
  "art",
  "music",
  "sports",
  "fashion",
];
export function getRandomCategory() {
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
}
export const generateDataArray = (count, filter) => {
  const dataArray = Array(count)
    .fill()
    .map((_, index) => ({
      id: uuidv4(),
      photoUrl: `https://source.unsplash.com/random/350x240?${getRandomCategory()}`,
      description: `Photo ${index + 1}`,
      email: `email${Math.floor(Math.random() * 5) + 1}@example.com`,
      coordinates: {
        latitude: Math.random() * (52.379128 - 44.379175) + 44.379175,
        longitude: Math.random() * (40.228362 - 22.12876) + 22.12876,
      },
      coordinateName: `Location ${index + 1}`,
      emails: Array(Math.floor(Math.random() * 5) + 1)
        .fill()
        .map((_, i) => `email${i + 1}@example.com`),
      comments: Array(Math.floor(Math.random() * 10))
        .fill()
        .map((_, i) => ({
          id: uuidv4(),
          email: `email${Math.floor(Math.random() * 5) + 1}@example.com`,
          avatarUrl: `https://source.unsplash.com/random/350x240?${getRandomCategory()}`,
          date: "2023-06-30",
          time: "08:40",
          comment: `Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips! ${
            i + 1
          }`,
        })),
    }));
  if (filter === "") {
    return dataArray;
  } else {
    return dataArray.filter((item) => item.email === filter);
  }
};
