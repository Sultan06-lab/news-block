export const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    
    let truncated = text.slice(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    
    if (lastSpace !== -1) {
      truncated = truncated.slice(0, lastSpace);
    }
    
    return truncated + '...';
};