from PIL import Image, ImageOps
import numpy as np

def process_image(input_path, output_light_path, output_dark_path):
    # Load the image
    img = Image.open(input_path).convert("RGBA")
    
    # Get data
    data = np.array(img)
    
    # Define white threshold (adjust if needed, assuming pure white background)
    threshold = 240
    
    # Create mask for white background
    r, g, b, a = data.T
    white_areas = (r > threshold) & (g > threshold) & (b > threshold)
    
    # Make white areas transparent
    data[..., 3][white_areas.T] = 0
    
    # Create transparent base image
    transparent_img = Image.fromarray(data)
    
    # --- Create Light Mode Version (Black Cat) ---
    # The original image is black on white. After making white transparent, 
    # the remaining pixels are black (the cat). So transparent_img is already the "Black Cat".
    # Just need to ensure non-transparent pixels are fully black if they aren't already.
    
    # Let's ensure the cat is pure black for consistency
    light_mode_data = data.copy()
    non_transparent = light_mode_data[..., 3] > 0
    light_mode_data[..., 0][non_transparent] = 0 # R
    light_mode_data[..., 1][non_transparent] = 0 # G
    light_mode_data[..., 2][non_transparent] = 0 # B
    
    cat_light = Image.fromarray(light_mode_data)
    cat_light.save(output_light_path)
    print(f"Saved {output_light_path}")

    # --- Create Dark Mode Version (White Cat) ---
    # We want the cat to be white.
    dark_mode_data = data.copy()
    
    # Set RGB to 255 (White) where alpha > 0
    non_transparent = dark_mode_data[..., 3] > 0
    dark_mode_data[..., 0][non_transparent] = 255 # R
    dark_mode_data[..., 1][non_transparent] = 255 # G
    dark_mode_data[..., 2][non_transparent] = 255 # B
    
    cat_dark = Image.fromarray(dark_mode_data)
    cat_dark.save(output_dark_path)
    print(f"Saved {output_dark_path}")

if __name__ == "__main__":
    input_file = "/Users/vansnobal/.gemini/antigravity/brain/719f125d-617a-419c-951a-901fb6dce11f/uploaded_image_1766241718243.png"
    output_light = "public/cat-light.png" # Black cat for light background
    output_dark = "public/cat-dark.png"   # White cat for dark background
    
    process_image(input_file, output_light, output_dark)
