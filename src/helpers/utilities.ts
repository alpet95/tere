/**
 * This function checks if heading includes the word "tere",
 * and if it does, makes it green by adding a span with a class.
 */
export const addGreenToHeading = (headingText: string): string => {
  const lowerCaseHeading = headingText.toLowerCase();

  if (lowerCaseHeading.includes("tere")) {
    return lowerCaseHeading.replace(
      "tere",
      '<span class="text-green">tere</span>'
    );
  } else {
    return headingText;
  }
};
