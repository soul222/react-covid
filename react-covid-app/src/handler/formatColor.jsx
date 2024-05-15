const formatColor = () => {
  const setTotalColor = (status) => {
    switch (status) {
      case "Positif":
        return "var(--primary)";
      case "Sembuh":
        return "var(--secondary)";
      case "Meninggal":
        return "var(--danger)";
      default:
        return "var(--Black)";
    }
  };

  return { setTotalColor };
};


export default formatColor;
