const senddibetise = async (req, res) => {
  try {
    // Validate user
    const user = await userModel.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } 
    // Extract and validate fields from the request body
    const id = req.params.id;
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
