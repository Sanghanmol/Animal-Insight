# Animal Insight

## Overview
Animal Insight is a responsive web application that categorizes and displays animal data (Dogs, Big Cats, Big Fish) in a user-friendly tabular interface. The application supports features such as adding, editing, and deleting animals while ensuring data validation. 

Additional functionalities:
- Fully responsive design for mobile, tablet, and desktop views.
- Built-in sorting for various attributes based on table specifications.
- Image hover effects to enhance user interaction.

---

## Design Approach

### 1. **Responsive Layout**
- Used **Bootstrap Grid System** for responsiveness across devices.
- Ensured tables adapt to different screen sizes for optimal user experience.

### 2. **Code Structure**
- **HTML**: Structured to segregate content into distinct sections (Dogs, Big Cats, Big Fish).
- **CSS**: Used custom styles for hover effects, image scaling, and consistent design aesthetics.
- **JavaScript**: Encapsulated logic into reusable classes and methods for easier maintenance and scalability.

### 3. **Validation**
- Prevent duplicate entries by comparing new data with existing entries.
- Enforced proper data types for fields like `size` (numeric validation).
- Ensured all fields (species, size, image) are filled before submission.

### 4. **User Experience**
- Added dynamic hover effects on images for better interaction.
- Highlighted animal names in bold or stylized text based on the table’s specifications.

---

## Features
1. **Sorting**: Allows sorting on specific attributes as per table requirements.
2. **CRUD Operations**:
   - Add animals dynamically to their respective categories.
   - Edit and update existing entries.
   - Delete animals with real-time UI updates.
3. **Validation**: Ensures all inputs are valid and prevents incorrect submissions.
4. **Hover Effects**: Enlarges images and displays names interactively.
5. **Responsive Design**: Adapts seamlessly to different screen sizes.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sanghanmol/Animal-Insight.git
   
