
import { Fraction, MathFormula } from "@/components/MathFormula";
import Highlighter from "@/components/Highlighter";
import Notebook from "@/components/Notebook";
import NotebookHeader from "@/components/NotebookHeader";
import NotebookSection from "@/components/NotebookSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-noteYellow py-10">
      <Notebook>
        <NotebookHeader 
          title="Solving Problems with Rational Numbers" 
          subtitle="Quick Reference (7.EE.B.3) 🧮" 
        />
        
        <NotebookSection title="Understanding Rational Numbers">
          <p>
            Know that rational numbers can be written as fractions <MathFormula><Fraction numerator="a" denominator="b" /></MathFormula>, where b≠0, and include:
          </p>
          <ul className="space-y-2 mt-2">
            <li>• Integers (e.g., -5, 0, 2)</li>
            <li>• Fractions (e.g., <MathFormula><Fraction numerator="3" denominator="4" /></MathFormula>, −<MathFormula><Fraction numerator="2" denominator="3" /></MathFormula>)</li>
            <li>• Decimals (terminating like 0.75 or repeating like 0.<span className="overline">6</span>)</li>
          </ul>
        </NotebookSection>
        
        <NotebookSection title="Core Skills">
          <p>
            <Highlighter>All Operations:</Highlighter> Fluency in adding, subtracting, multiplying, and dividing all forms of rational numbers (positive/negative, fractions/decimals/integers) is fundamental.
          </p>
        </NotebookSection>
        
        <NotebookSection title="Problem-Solving Approach">
          <ul className="space-y-3">
            <li>
              <Highlighter>Multi-Step Problem Structure:</Highlighter> Be prepared for problems requiring several calculation steps. The order of operations (PEMDAS/BODMAS) is critical here.
            </li>
            
            <li>
              <Highlighter>Problem Deconstruction:</Highlighter> Before solving, always identify the question being asked, the given information, and the necessary operations.
            </li>
            
            <li>
              <Highlighter>Strategic Conversion:</Highlighter> Recognize when converting between fractions and decimals (e.g., <MathFormula><Fraction numerator="1" denominator="2" /></MathFormula> to 0.5) can simplify calculations.
            </li>
          </ul>
        </NotebookSection>
        
        <NotebookSection title="Application & Context">
          <p className="mb-3">
            <Highlighter>Focus on Real-World Contexts:</Highlighter> The standard emphasizes applying these math skills to everyday situations involving money, measurements, changes, etc.
          </p>
          
          <p>
            <Highlighter>Key to Accuracy - Evaluation:</Highlighter> Always assess the reasonableness of your final answer by comparing it to your estimate and considering the problem's context. Ask: "Does this solution make sense?"
          </p>
        </NotebookSection>
        
        <NotebookSection title="Calculation Strategies">
          <ul className="space-y-3">
            <li>
              <Highlighter>Mental Math's Role:</Highlighter> Mental computation is used for simpler calculations within larger problems and for quick estimations.
            </li>
            
            <li>
              <Highlighter>Estimation as a Tool:</Highlighter> Employ estimation strategies (like rounding or using compatible numbers) before precise calculation to predict a reasonable answer range.
            </li>
          </ul>
        </NotebookSection>
        
        <NotebookSection title="Vocabulary Clues">
          <p>Pay attention to keywords in problems that signal specific operations:</p>
          <ul className="space-y-2 mt-2">
            <li>• <span className="font-bold text-noteRed">Addition:</span> "sum," "total," "combined"</li>
            <li>• <span className="font-bold text-noteRed">Subtraction:</span> "difference," "less than," "decrease"</li>
            <li>• <span className="font-bold text-noteRed">Multiplication:</span> "product," "of," "times"</li>
            <li>• <span className="font-bold text-noteRed">Division:</span> "quotient," "distribute equally," "per"</li>
          </ul>
        </NotebookSection>
      </Notebook>
    </div>
  );
};

export default Index;
