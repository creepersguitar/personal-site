#include <iostream>
#include <vector>

using Matrix = std::vector<std::vector<double>>;

// Function to multiply two matrices
Matrix multiplyMatrices(const Matrix& A, const Matrix& B) {
    if (A[0].size() != B.size()) {
        throw std::invalid_argument("Incompatible matrix dimensions for multiplication.");
    }

    size_t rows = A.size();
    size_t cols = B[0].size();
    size_t common_dim = B.size();

    Matrix result(rows, std::vector<double>(cols, 0.0));

    for (size_t i = 0; i < rows; ++i) {
        for (size_t j = 0; j < cols; ++j) {
            for (size_t k = 0; k < common_dim; ++k) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return result;
}

// Optional function for displaying matrices (for debugging)
void printMatrix(const Matrix& matrix) {
    for (const auto& row : matrix) {
        for (double value : row) {
            std::cout << value << " ";
        }
        std::cout << std::endl;
    }
}

int main() {
    // Example usage: Define two matrices and multiply them
    Matrix A = {{1, 2, 3}, {4, 5, 6}};
    Matrix B = {{7, 8}, {9, 10}, {11, 12}};

    try {
        Matrix result = multiplyMatrices(A, B);
        std::cout << "Result of matrix multiplication:\n";
        printMatrix(result);
    } catch (const std::invalid_argument& e) {
        std::cerr << e.what() << std::endl;
    }

    return 0;
}
