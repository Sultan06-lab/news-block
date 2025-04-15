export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
  
    const day = date.getDate();
    const monthAndYear = date.toLocaleDateString('en-EN', {
      month: 'short',
      year: 'numeric',
    });
    return [day, monthAndYear]
};