var documenterSearchIndex = {"docs":
[{"location":"moments/#Moments-and-expectation","page":"Moments and expectation","title":"Moments and expectation","text":"","category":"section"},{"location":"moments/#Moment","page":"Moments and expectation","title":"Moment","text":"","category":"section"},{"location":"moments/","page":"Moments and expectation","title":"Moments and expectation","text":"Given a measure mu and a monomial m, the moment m of the measure is defined by the expectation mathbbE_mum. Given a monomial and a value for the moment, a moment can be created using the moment function","category":"page"},{"location":"moments/","page":"Moments and expectation","title":"Moments and expectation","text":"moment","category":"page"},{"location":"moments/#MultivariateMoments.moment","page":"Moments and expectation","title":"MultivariateMoments.moment","text":"moment(α, m::AbstractMonomial)\n\nCreates the moment of the monomial m of value α.\n\n\n\n\n\n","category":"function"},{"location":"moments/","page":"Moments and expectation","title":"Moments and expectation","text":"The moment function returns an AbstractMoment which is a subtype of AbstractMomentLike. An AbstractMomentLike is a type that can act like an AbstractMoment (it is similar to MultivariatePolynomials' AbstractMonomialLike, AbstractTermLike and AbstractPolynomialLike), that is, it implements the following two functions","category":"page"},{"location":"moments/","page":"Moments and expectation","title":"Moments and expectation","text":"moment_value\nMultivariatePolynomials.monomial(::MultivariateMoments.Moment)","category":"page"},{"location":"moments/#MultivariateMoments.moment_value","page":"Moments and expectation","title":"MultivariateMoments.moment_value","text":"moment_value(m::AbstractMomentLike)\n\nReturns the value of the moment m.\n\nExamples\n\nCalling moment_value(moment(3.1, x*y^2)) should return 3.1.\n\n\n\n\n\n","category":"function"},{"location":"moments/#MultivariatePolynomials.monomial-Tuple{MultivariateMoments.Moment}","page":"Moments and expectation","title":"MultivariatePolynomials.monomial","text":"monomial(m::AbstractMomentLike)\n\nReturns the monomial of the moment m.\n\nExamples\n\nCalling monomial(moment(3.1, x*y^2)) should return x*y^2.\n\n\n\n\n\n","category":"method"},{"location":"moments/#Measure","page":"Moments and expectation","title":"Measure","text":"","category":"section"},{"location":"moments/","page":"Moments and expectation","title":"Moments and expectation","text":"Given a monomials and a values for the moments, a \"measure\" can be created using the measure function","category":"page"},{"location":"moments/","page":"Moments and expectation","title":"Moments and expectation","text":"measure","category":"page"},{"location":"moments/#MultivariateMoments.measure","page":"Moments and expectation","title":"MultivariateMoments.measure","text":"measure(a::AbstractVector{T}, X::AbstractVector{<:AbstractMonomial}; rtol=Base.rtoldefault(T), atol=zero(T))\n\nCreates a measure with moments moment(a[i], X[i]) for each i. An error is thrown if there exists i and j such that X[i] == X[j] but !isapprox(a[i], a[j]; rtol=rtol, atol=atol).\n\n\n\n\n\n","category":"function"},{"location":"moments/","page":"Moments and expectation","title":"Moments and expectation","text":"The measure function returns an AbstractMeasure which is a subtype of AbstractMeasureLike. Note that it does not actually compute the probability density function of a measure having these moments, it simply stores a vector of moments belonging to a hypothetical measure. However, it acts like a measure when taking its scalar product with a polynomial.","category":"page"},{"location":"moments/","page":"Moments and expectation","title":"Moments and expectation","text":"An AbstractMeasureLike is a type that can act like an AbstractMeasure, that is, it implements the following two functions","category":"page"},{"location":"moments/","page":"Moments and expectation","title":"Moments and expectation","text":"MultivariatePolynomials.variables(::MultivariateMoments.Measure)\nMultivariatePolynomials.monomials(::MultivariateMoments.Measure)\nmoments","category":"page"},{"location":"moments/#MultivariatePolynomials.variables-Tuple{MultivariateMoments.Measure}","page":"Moments and expectation","title":"MultivariatePolynomials.variables","text":"variables(μ::AbstractMeasureLike)\n\nReturns the variables of μ in decreasing order. Just like in MultivariatePolynomials, it could contain variables of zero degree in every monomial.\n\n\n\n\n\n","category":"method"},{"location":"moments/#MultivariatePolynomials.monomials-Tuple{MultivariateMoments.Measure}","page":"Moments and expectation","title":"MultivariatePolynomials.monomials","text":"monomials(μ::AbstractMeasureLike)\n\nReturns an iterator over the monomials of μ sorted in the decreasing order.\n\n\n\n\n\n","category":"method"},{"location":"moments/#MultivariateMoments.moments","page":"Moments and expectation","title":"MultivariateMoments.moments","text":"moments(μ::AbstractMeasureLike)\n\nReturns an iterator over the moments of μ sorted in decreasing order of monomial.\n\n\n\n\n\n","category":"function"},{"location":"moments/","page":"Moments and expectation","title":"Moments and expectation","text":"The moments of the dirac measure for a vector of monomials can be obtained by the dirac function","category":"page"},{"location":"moments/","page":"Moments and expectation","title":"Moments and expectation","text":"dirac","category":"page"},{"location":"moments/#MultivariateMoments.dirac","page":"Moments and expectation","title":"MultivariateMoments.dirac","text":"dirac(X::AbstractVector{<:AbstractMoment}, s::AbstractSubstitution...)\n\nCreates the dirac measure by evaluating the moments of X using s.\n\nExamples\n\nCalling dirac([x*y, x*y^2], x=>3, y=>2) should the measure with moment x*y of value 6 and moment x*y^2 of value 12.\n\n\n\n\n\n","category":"function"},{"location":"moments/#Expectation","page":"Moments and expectation","title":"Expectation","text":"","category":"section"},{"location":"moments/","page":"Moments and expectation","title":"Moments and expectation","text":"The expectation of polynomial with respect to a measure can be computed either using MultivariateMoments.expectation or using the Base.dot scalar product.","category":"page"},{"location":"moments/","page":"Moments and expectation","title":"Moments and expectation","text":"MultivariateMoments.expectation\nMultivariateMoments.dot","category":"page"},{"location":"moments/#MultivariateMoments.expectation","page":"Moments and expectation","title":"MultivariateMoments.expectation","text":"MultivariateMoments.expectation(μ::AbstractMeasureLike, p::AbstractPolynomialLike)\nMultivariateMoments.expectation(p::AbstractPolynomialLike, μ::AbstractMeasureLike)\n\nComputes the expectation mathbbE_mup.\n\n\n\n\n\n","category":"function"},{"location":"moments/#LinearAlgebra.dot","page":"Moments and expectation","title":"LinearAlgebra.dot","text":"dot(μ::AbstractMeasureLike, p::AbstractPolynomialLike)\ndot(p::AbstractPolynomialLike, μ::AbstractMeasureLike)\n\nSee expectation\n\n\n\n\n\n","category":"function"},{"location":"#MultivariateMoments-–-Multivariate-Moments-for-Julia","page":"Index","title":"MultivariateMoments –- Multivariate Moments for Julia","text":"","category":"section"},{"location":"","page":"Index","title":"Index","text":"Extension of MultivariatePolynomials to moments of multivariate measures and their scalar product with polynomials. It also includes the extraction of atomic measures from moment matrices which is related to the moment problem.","category":"page"},{"location":"#Contents","page":"Index","title":"Contents","text":"","category":"section"},{"location":"","page":"Index","title":"Index","text":"Pages = [\"moments.md\", \"atoms.md\"]\nDepth = 2","category":"page"},{"location":"atoms/#Atoms-extration","page":"Atoms extraction","title":"Atoms extration","text":"","category":"section"},{"location":"atoms/#Vectorized-matrix","page":"Atoms extraction","title":"Vectorized matrix","text":"","category":"section"},{"location":"atoms/","page":"Atoms extraction","title":"Atoms extraction","text":"SymMatrix\nVectorizedHermitianMatrix\nsquare_getindex\nsymmetric_setindex!","category":"page"},{"location":"atoms/#MultivariateMoments.SymMatrix","page":"Atoms extraction","title":"MultivariateMoments.SymMatrix","text":"struct SymMatrix{T} <: AbstractMatrix{T}\n    Q::Vector{T}\n    n::Int\nend\n\nSymmetric n times n matrix storing the vectorized upper triangular part of the matrix in the Q vector (this corresponds to the vectorized form of MathOptInterface.PositiveSemidefiniteConeTriangle). It implement the AbstractMatrix interface except for setindex! as it might break its symmetry. The symmetric_setindex! function should be used instead.\n\n\n\n\n\n","category":"type"},{"location":"atoms/#MultivariateMoments.VectorizedHermitianMatrix","page":"Atoms extraction","title":"MultivariateMoments.VectorizedHermitianMatrix","text":"struct VectorizedHermitianMatrix{T} <: AbstractMatrix{Complex{T}}\n    Q::Vector{T}\n    n::Int\nend\n\nHermitian n times n matrix storing the vectorized upper triangular real part of the matrix followed by the vectorized upper triangular imaginary part in the Q vector (this corresponds to the vectorized form of ComplexOptInterface.HermitianPositiveSemidefiniteConeTriangle). It implement the AbstractMatrix interface except for setindex! as it might break its symmetry. The symmetric_setindex! function should be used instead.\n\n\n\n\n\n","category":"type"},{"location":"atoms/#MultivariateMoments.square_getindex","page":"Atoms extraction","title":"MultivariateMoments.square_getindex","text":"square_getindex!(Q::SymMatrix, I)\n\nReturn the SymMatrix corresponding to Q[I, I].\n\n\n\n\n\nsquare_getindex!(Q::VectorizedHermitianMatrix, I)\n\nReturn the VectorizedHermitianMatrix corresponding to Q[I, I].\n\n\n\n\n\n","category":"function"},{"location":"atoms/#MultivariateMoments.symmetric_setindex!","page":"Atoms extraction","title":"MultivariateMoments.symmetric_setindex!","text":"symmetric_setindex!(Q::SymMatrix, value, i::Integer, j::Integer)\n\nSet Q[i, j] and Q[j, i] to the value value.\n\n\n\n\n\nsymmetric_setindex!(Q::VectorizedHermitianMatrix, value, i::Integer, j::Integer)\n\nSet Q[i, j] to the value value and Q[j, i] to the value -value.\n\n\n\n\n\n","category":"function"},{"location":"atoms/#Moment-matrix","page":"Atoms extraction","title":"Moment matrix","text":"","category":"section"},{"location":"atoms/","page":"Atoms extraction","title":"Atoms extraction","text":"MomentMatrix\nmoment_matrix","category":"page"},{"location":"atoms/#MultivariateMoments.MomentMatrix","page":"Atoms extraction","title":"MultivariateMoments.MomentMatrix","text":"mutable struct MomentMatrix{T, B<:MultivariateBases.AbstractPolynomialBasis, MT<:AbstractMatrix{T}} <: AbstractMeasureLike{T}\n    Q::MT\n    basis::B\n    support::Union{Nothing, AlgebraicSet}\nend\n\nMeasure nu represented by the moments of the monomial matrix x x^top in the symmetric matrix Q. The set of points that are zeros of all the polynomials p such that mathbbE_nup = 0 is stored in the field support when it is computed.\n\n\n\n\n\n","category":"type"},{"location":"atoms/#MultivariateMoments.moment_matrix","page":"Atoms extraction","title":"MultivariateMoments.moment_matrix","text":"moment_matrix(μ::Measure, x)\n\nCreates a matrix the moment matrix for the moment matrix  x x^top using the moments of μ.\n\n\n\n\n\n","category":"function"},{"location":"atoms/#Atomic-measure","page":"Atoms extraction","title":"Atomic measure","text":"","category":"section"},{"location":"atoms/","page":"Atoms extraction","title":"Atoms extraction","text":"WeightedDiracMeasure\nAtomicMeasure","category":"page"},{"location":"atoms/#MultivariateMoments.WeightedDiracMeasure","page":"Atoms extraction","title":"MultivariateMoments.WeightedDiracMeasure","text":"struct WeightedDiracMeasure{T}\n    center::Vector{T}\n    weight::T\nend\n\nRepresents a weighted dirac measure with centered at center and with weight weight.\n\n\n\n\n\n","category":"type"},{"location":"atoms/#MultivariateMoments.AtomicMeasure","page":"Atoms extraction","title":"MultivariateMoments.AtomicMeasure","text":"struct AtomicMeasure{T, AT, V} <: AbstractMeasureLike{T}\n    variables::V                           # Vector/Tuple of variables\n    atoms::Vector{WeightedDiracMeasure{T, AT}} # Atoms of the measure\nend\n\nAn measure is said to be atomic if it is a sum of weighted dirac measures. For instance, eta = 2 delta_(1 0) + 3 delta_(12 12) is an atomic measure since it is a sum of the diracs centered at (1 0) and (12 12) and weighted respectively by 2 and 3. That is, mathbbE_etap = 2p(1 0) + 3p(12 12).\n\nThe AtomicMeasure struct stores an atomic measure where variables contains the variables and atoms contains atoms of the measure.\n\n\n\n\n\n","category":"type"},{"location":"atoms/#Atoms-extraction","page":"Atoms extraction","title":"Atoms extraction","text":"","category":"section"},{"location":"atoms/","page":"Atoms extraction","title":"Atoms extraction","text":"Given a MomentMatrix with a positive semidefinite moment matrix, an algebraic system for which the set of solution is a superset of the support of the measure. If the measure is atomic and the MomentMatrix contains enough moments, the algebraic system will only have a finite number of solutions which are the centers of the diracs of the measure.","category":"page"},{"location":"atoms/","page":"Atoms extraction","title":"Atoms extraction","text":"MultivariateMoments.compute_support!\natomic_measure","category":"page"},{"location":"atoms/#MultivariateMoments.compute_support!","page":"Atoms extraction","title":"MultivariateMoments.compute_support!","text":"MultivariateMoments.compute_support!(ν::MomentMatrix, rank_check, [dec])\n\nComputes the support field of ν. The rank_check and dec parameters are passed as is to the low_rank_ldlt function.\n\n\n\n\n\n","category":"function"},{"location":"atoms/#MultivariateMoments.atomic_measure","page":"Atoms extraction","title":"MultivariateMoments.atomic_measure","text":"atomic_measure(ν::MomentMatrix, rank_check::RankCheck, [dec::LowRankLDLTAlgorithm], [solver::SemialgebraicSets.AbstractAlgebraicSolver])\n\nReturn an AtomicMeasure with the atoms of ν if it is atomic or nothing if ν is not atomic. The rank_check and dec parameters are passed as is to the low_rank_ldlt function. By default, dec is an instance of SVDLDLT. The extraction relies on the solution of a system of algebraic equations. using solver. For instance, given a MomentMatrix, μ, the following extract atoms using a rank_check of 1e-4 for the low-rank decomposition and homotopy continuation to solve the obtained system of algebraic equations.\n\nusing HomotopyContinuation\nsolver = SemialgebraicSetsHCSolver(; compile = false)\natoms = atomic_measure(ν, 1e-4, solver)\n\nIf no solver is given, the default solver of SemialgebraicSets is used which currently computes the Gröbner basis, then the multiplication matrices and then the Schur decomposition of a random combination of these matrices. For floating point arithmetics, homotopy continuation is recommended as it is more numerically stable than Gröbner basis computation.\n\n\n\n\n\n","category":"function"},{"location":"atoms/","page":"Atoms extraction","title":"Atoms extraction","text":"This system is obtained from a low rank cholesky decomposition of the moment matrix. This decomposition can either be obtained by a cholesky or SVD decomposition from which we remove the rows corresponding to the negligeable eigenvalues/singular values.","category":"page"},{"location":"atoms/","page":"Atoms extraction","title":"Atoms extraction","text":"LowRankLDLTAlgorithm\nShiftCholesky\nSVDLDLT\nMultivariateMoments.low_rank_ldlt\nMultivariateMoments.LowRankLDLT\nMultivariateMoments.MacaulayNullspace\nMultivariateMoments.accuracy\nMultivariateMoments.rank_from_singular_values","category":"page"},{"location":"atoms/#MultivariateMoments.LowRankLDLTAlgorithm","page":"Atoms extraction","title":"MultivariateMoments.LowRankLDLTAlgorithm","text":"LowRankLDLTAlgorithm\n\nMethod for computing a r times n matrix U of a n times n rank r psd matrix Q such that Q = U'U.\n\n\n\n\n\n","category":"type"},{"location":"atoms/#MultivariateMoments.ShiftCholesky","page":"Atoms extraction","title":"MultivariateMoments.ShiftCholesky","text":"ShiftCholesky <: LowRankLDLTAlgorithm\n\nShift the matrix by shift times the identity matrix before cholesky.\n\n\n\n\n\n","category":"type"},{"location":"atoms/#MultivariateMoments.SVDLDLT","page":"Atoms extraction","title":"MultivariateMoments.SVDLDLT","text":"SVDLDLT <: LowRankLDLTAlgorithm\n\nUse SVD decomposition.\n\n\n\n\n\n","category":"type"},{"location":"atoms/#MultivariateMoments.low_rank_ldlt","page":"Atoms extraction","title":"MultivariateMoments.low_rank_ldlt","text":"MultivariateMoments.low_rank_ldlt(Q::AbstractMatrix, dec::LowRankLDLTAlgorithm, ranktol)\n\nReturns a r times n matrix U of a n times n rank r positive semidefinite matrix Q such that Q = U^top U. The rank of Q is the number of singular values larger than ranktol cdot sigma_1 where sigma_1 is the largest singular value.\n\n\n\n\n\n","category":"function"},{"location":"atoms/#MultivariateMoments.LowRankLDLT","page":"Atoms extraction","title":"MultivariateMoments.LowRankLDLT","text":"struct LowRankLDLT{T}\n    L::Matrix{T}\n    singular_values::Vector{T}\nend\n\nLow-Rank cholesky decomposition L * Diagonal(singular_values) * L' of size (n, r) of a n x n matrix with singular values singular_values[1] > ... > singular_values[n]. The rank was chosen given singular_values using rank_check via the rank_from_singular_values function.\n\n\n\n\n\n","category":"type"},{"location":"atoms/#MultivariateMoments.MacaulayNullspace","page":"Atoms extraction","title":"MultivariateMoments.MacaulayNullspace","text":"struct MacaulayNullspace{T,MT<:AbstractMatrix{T},BT}\n    matrix::MT\n    basis::BT\nend\n\nRight nullspace with rows indexed by basis of a Macaulay matrix with columns indexed by basis. The value of matrix[i, j] should be interpreted as the value of the ith element of basis for the jth generator of the nullspace.\n\n\n\n\n\n","category":"type"},{"location":"atoms/#MultivariateMoments.accuracy","page":"Atoms extraction","title":"MultivariateMoments.accuracy","text":"accuracy(chol::LowRankLDLT)\n\nReturn the ratio rtol = σ[r+1]/σ[1] where σ is the vector of singular values of the matrix for which chol is the rank-r Cholesky decomposition. This is a good relative tolerance to use with the matrix as σ[r+1] is the first singular value that was discarded.\n\n\n\n\n\n","category":"function"},{"location":"atoms/#MultivariateMoments.rank_from_singular_values","page":"Atoms extraction","title":"MultivariateMoments.rank_from_singular_values","text":"rank_from_singular_values(σ, check::RankCheck)\n\nReturn the rank of a matrix with singular values σ (in decreasing order) using check.\n\n\n\n\n\n","category":"function"},{"location":"atoms/","page":"Atoms extraction","title":"Atoms extraction","text":"Once the center of the atoms are determined, a linear system is solved to determine the weights corresponding to each dirac. By default, MomentMatrixWeightSolver is used by atomic_measure so that if there are small differences between moment values corresponding to the same monomial in the matrix (which can happen if these moments were computed numerically by a semidefinite proramming solvers, e.g., with SumOfSquares), the linear system handles that automatically.","category":"page"},{"location":"atoms/","page":"Atoms extraction","title":"Atoms extraction","text":"MomentMatrixWeightSolver\nMomentVectorWeightSolver","category":"page"},{"location":"atoms/#MultivariateMoments.MomentMatrixWeightSolver","page":"Atoms extraction","title":"MultivariateMoments.MomentMatrixWeightSolver","text":"struct MomentMatrixWeightSolver\n    rtol::T\n    atol::T\nend\n\nGiven a moment matrix ν and the atom centers, determine the weights by solving a linear system over all the moments of the moment matrix, keeping duplicates (e.g., entries corresponding to the same monomial).\n\nIf the moment values corresponding to the same monomials are known to be equal prefer MomentVectorWeightSolver instead.\n\n\n\n\n\n","category":"type"},{"location":"atoms/#MultivariateMoments.MomentVectorWeightSolver","page":"Atoms extraction","title":"MultivariateMoments.MomentVectorWeightSolver","text":"struct MomentVectorWeightSolver{T}\n    rtol::T\n    atol::T\nend\n\nGiven a moment matrix ν and the atom centers, first convert the moment matrix to a vector of moments, using measure(ν; rtol=rtol, atol=atol) and then determine the weights by solving a linear system over the monomials obtained.\n\nIf the moment values corresponding to the same monomials can have small differences, measure can throw an error if rtol and atol are not small enough. Alternatively to tuning these tolerances MomentVectorWeightSolver can be used instead.\n\n\n\n\n\n","category":"type"}]
}
