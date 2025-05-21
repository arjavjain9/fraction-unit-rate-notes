
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
          title="Unit Rates with Fractions" 
          subtitle="Quick Notes 🚀" 
        />
        
        <NotebookSection title="Focus">
          <p>Calculating "how much for one" when fractions are involved.</p>
        </NotebookSection>
        
        <NotebookSection title="Key Concepts">
          <ul className="space-y-3">
            <li>
              <Highlighter>Ratio:</Highlighter> Compares two quantities (e.g., 3 apples to 4 oranges, or <MathFormula><Fraction numerator="3" denominator="4" /></MathFormula>).
            </li>
            
            <li>
              <Highlighter>Rate:</Highlighter> A ratio comparing quantities with different units (e.g., 150 miles in 3 hours).
            </li>
            
            <li>
              <Highlighter>Unit Rate:</Highlighter> A rate where the second quantity is 1 unit (e.g., 50 miles per 1 hour). Tells you "how much per one."
            </li>
          </ul>
        </NotebookSection>
        
        <NotebookSection title="Finding a Unit Rate">
          <p className="mb-2">Always divide the first quantity by the second quantity:</p>
          <p className="text-center mb-3">
            <MathFormula className="text-lg px-4">(Quantity 1) ÷ (Quantity 2) = Unit Rate</MathFormula>
          </p>
          <p><Highlighter>"Per" Means Divide:</Highlighter> Words like "per" (miles per hour, cost per item) signal a unit rate and the division operation.</p>
        </NotebookSection>
        
        <NotebookSection title="Setting up with Fractions">
          <p className="mb-2">Write the rate as a fraction. The quantity you want "per unit of" goes in the denominator.</p>
          <p>Example: To find cost per pound: <MathFormula><Fraction numerator="Total Cost" denominator="Total Pounds" /></MathFormula></p>
        </NotebookSection>
        
        <NotebookSection title="Mixed Numbers">
          <p className="mb-2">Convert any mixed numbers in your rate to improper fractions before dividing.</p>
          <p>Example: 2<MathFormula><Fraction numerator="1" denominator="2" /></MathFormula> becomes <MathFormula><Fraction numerator="5" denominator="2" /></MathFormula>.</p>
        </NotebookSection>
        
        <NotebookSection title="Dividing Fractions">
          <p className="mb-2">To divide fractions, multiply by the reciprocal of the denominator (the second fraction). (Keep → Change → Flip).</p>
          <p className="text-center">
            <MathFormula className="px-4">
              <Fraction numerator="a" denominator="b" /> ÷ <Fraction numerator="c" denominator="d" /> = <Fraction numerator="a" denominator="b" /> × <Fraction numerator="d" denominator="c" />
            </MathFormula>
          </p>
        </NotebookSection>
        
        <NotebookSection title="Simplify & Units">
          <p>After calculating, simplify your fraction/number and always include the correct units (e.g., miles/hour, $/pound).</p>
        </NotebookSection>
        
        <NotebookSection title="Why Use Unit Rates?">
          <p>For fair comparisons (best buys), measuring speed, efficiency, or figuring out amounts for single items/servings.</p>
        </NotebookSection>
      </Notebook>
    </div>
  );
};

export default Index;
