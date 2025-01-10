export const renderStars = (rating) => {
  console.log("rating===>", rating)
  console.log("별 찍기===>", '★'.repeat(rating) + '☆'.repeat(5 - rating))
  return '★'.repeat(rating) + '☆'.repeat(5 - rating)
}

export const getBookEmoji = (index) => {
  return ['📕','📗','📙','📘','📔'][Number(index) % 5]
}

export const genres = [
  'Fiction', 'Non-fiction', 'Fantasy',
'Dystopian', 'Philosophy', 'Romance', 'Programming'
]