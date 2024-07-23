import os

# Base directory
base_dir = r"D:\harkirat singh\100xdev-Codes"

# Weeks to create
weeks = [
    "Week-5", "Week-6", "Week-7", "Week-8", "Week-9", "Week-10", "Week-11", 
    "Week-12", "Week-13", "Week-14", "Week-15", "Week-16", "Week-17", "Week-18", 
    "Week-19", "Week-20", "Week-21", "Week-22", "Week-23", "Week-24", "Week-25", 
    "Week-26", "Week-27", "Week-28", "Week-29", "Week-30", "Week-31", "Week-32", 
    "Week-33", "Week-34"
]

# Create directories
for week in weeks:
    dir_path = os.path.join(base_dir, week)
    os.makedirs(dir_path, exist_ok=True)
    print(f"Created directory: {dir_path}")

print("Directory structure created successfully.")
