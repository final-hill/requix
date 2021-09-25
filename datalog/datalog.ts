const zip = <X, Y>(xs: X[], ys: Y[]): [X, Y][] => xs.map((x, i) => [x, ys[i]]);

class Substitution {
    #map = new Map<string, Sym>()
    delete(term: Var): boolean {
        return this.#map.delete(term.name)
    }
    get(term: Var): Sym | undefined {
        return this.#map.get(term.name)
    }
    has(term: Var): boolean {
        return this.#map.has(term.name)
    }
    set(term: Var, sym: Sym) {
        this.#map.set(term.name,sym)
        return this
    }
}
const substitution = new Substitution();

class Rule {
  constructor(readonly head: Atom, readonly body: Atom[]) {}
  isRangeRestricted(): boolean {
    // TODO
  }
}

class Atom {
  constructor(readonly predSymbol: string, readonly terms: Term[]) {}

  substitute() {
    return new Atom(
      this.predSymbol,
      this.terms.map((term) => term.substitute())
    );
  }
  unify(atom: Atom): unknown | undefined {
    return this.predSymbol === atom.predSymbol ?
        :
        undefined
  }
}

/*
const unify = (left: Atom, right: Atom) => {
  const go = (substitution: [Term, Term][]): Substitution | undefined => {
    if (substitution.length == 0) return emptySubstitution;
    const [[left, right], ...rest] = substitution;
    if (left instanceof Sym && right instanceof Sym)
      return left.name === right.name ? go(rest) : undefined;
    if (left instanceof Var && right instanceof Sym) {
      const incompleteSubstitution = go(rest);
      if (incompleteSubstitution) lookup(incompleteSubstitution, left);
      // TODO
    }
  };
  return left.predSymbol === right.predSymbol
    ? go(zip(left.terms, right.terms))
    : undefined;
};
*/

abstract class Term {
  abstract substitute(): Term;
}

class Var extends Term {
  constructor(readonly name: string) {
    super();
  }
  substitute(): Term {
    return substitution.get(this) ?? this;
  }
}

class Sym extends Term {
  constructor(readonly name: string) {
    super();
  }
  substitute(): Sym {
    return this;
  }
}

type Program = Rule[];
/////////////////////////////////////////////////
class KnowledgeBase {
  #atoms: Atom[] = [];

  //ask() {}
  //tell() {}
  evalAtom(){
    // TODO
  }
  evalRule(){
    // TODO
  }
  walk(atoms: Atom[]){
    // TODO
  }
}

const kb = new KnowledgeBase();

class Datalog {
    #rules: Rule[] = []

    fact(name: string, ...symbols: string[]) {
        this.#rules.push(
            new Rule(
                new Atom(name,symbols.map(sym => new Sym(sym))),
                []
            )
        )

        return this
    }
    facts(...facts: [string, ...string[]][]) {
        facts.forEach(([name, symbols]) =>
            this.fact(name,...symbols)
        )
        return this
    }
    rule(name: string){
      return this
    }
    rules(){
      return this
    }
}

//////////////////////////////////////////////////
const ancestry = new Datalog()
    .facts(
        ['adviser', 'Andrew Rice', 'Mistral Contrastin'],
        ['adviser', 'Dominic Orchard', 'Mistral Contrastin'],
        ['adviser', 'Andy Hopper', 'Andrew Rice'],
        ['adviser', 'Alan Mycroft', 'Dominic Orchard'],
        ['adviser', 'David Wheeler', 'Andy Hopper'],
        ['adviser', 'Rod Burstall', 'Alan Mycroft'],
        ['adviser', 'Robin Milner', 'Alan Mycroft']
    )
    .rules(
        ['academicAncestor', '$X', '$Y', [
            ['adviser', '$X', '$Y']
        ]],
        ['academicAncestor', '$X', '$Z', [
            ['adviser', '$X', '$Y'],
            ['academicAncestor', '$Y', '$Z']
        ]]
    )
