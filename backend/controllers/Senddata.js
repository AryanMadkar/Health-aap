const senddibetise = async (req, res) => {
  try {
    const id = req.params.id;
    if (req.user.id !== id) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    // Validate user
    const user = await userModel.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
  
    // Extract and validate fields from the request body
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
