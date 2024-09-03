# Introduction

A web application specifically designed for calculating the first n decimal places of \( e^x \) and \( \pi \).


## Features
- **Calculate \( e^x \)**: Evaluate the exponential function to a specified number of decimal places using the Taylor series expansion.
- **Calculate \( \pi \)**: Compute the value of \( \pi \) using the Machin-like formula with arbitrary precision.


## Accuracy Note
While this application uses Decimal.js to provide high-precision results, please be aware of the following:
- **Limited Precision**: Due to limitations in the JavaScript environment and Decimal.js precision settings, extremely high precision results might still have some degree of rounding or accuracy constraints.
- **Performance**: Calculating very high precision values may impact performance, particularly in web browsers with limited computational resources.

## Getting Started

To use this web application, you have two options as follows

1. **Online:** use the following [Link](https://mohammed-gamal.github.io/euler-and-pi/).

2. **Locally:** clone the Repository

   ```bash
   git clone https://github.com/yourusername/euler-and-pi.git
   ```

## Preview
![image](https://github.com/user-attachments/assets/e64a5507-7ae3-4003-a8ce-a8386ea51f50)
