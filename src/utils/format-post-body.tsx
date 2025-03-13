// Necesary to named the file like tsx to recognize html sintax

// Format the post body text with proper paragraphs
export const formatBody = (text: string) => {
  return text.split("\n").map((paragraph, index) => (
    <p key={index} className="mb-2 last:mb-0">
      {paragraph}
    </p>
  ));
};