<template>
  <div></div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

class Rule {
  constructor (
        readonly head: Atom,
        readonly body: Atom[]
  ) {}
}

interface IEq {}

class Atom implements IEq {
  constructor (
        readonly predSymbol: string,
        readonly terms: Term[]
  ) {}
}

abstract class Term implements IEq {}

class Var extends Term {
  constructor (readonly name: string) { super() }
}

class Sym extends Term {
  constructor (readonly name: string) { super() }
}

type Program = Rule[]
type Substitution = [Term, Term][]

const emptySubstitution: Substitution = []

/////////////////////////////////////////////////
class KnowledgeBase {
    #atoms: Atom[] = []

    ask(){}
    tell(){}
}

const kb = new KnowledgeBase()

//////////////////////////////////////////////////
const program: Program = [
    // adviser("Andrew Rice",     "Mistral Contrastin").
    new Rule(
        new Atom('adviser', [new Sym('Andrew Rice'), new Sym('Mistral Contrastin')]),
        []
    ),
    // adviser("Andy Hopper",     "Andrew Rice").
    new Rule(
        new Atom('adviser', [new Sym('Andy Hopper'), new Sym('Andrew Rice')]),
        []
    ),
    // adviser("Alan Mycroft",    "Dominic Orchard").
    new Rule(
        new Atom('adviser', [new Sym('Alan Mycroft'), new Sym('Dominic Orchard')]),
        []
    ),
    // adviser("David Wheeler",   "Andy Hopper").
    new Rule(
        new Atom('adviser', [new Sym('David Wheeler'), new Sym('Andy Hopper')]),
        []
    ),
    // adviser("Rod Burstall",    "Alan Mycroft").
    new Rule(
        new Atom('adviser', [new Sym('Rod Burstall'), new Sym('Alan Mycroft')]),
        []
    ),
    // adviser("Robin Milner",    "Alan Mycroft").
    new Rule(
        new Atom('adviser', [new Sym('Robin Milner'), new Sym('Alan Mycroft')]),
        []
    ),
    // academicAncestor(X,Y) :- adviser(X,Y).
    new Rule(
        new Atom('academicAncestor', [new Var('X'), new Var('Y')]), [
            new Atom('adviser', [new Var('X'), new Var('Y')])
        ]
    ),
    // academicAncestor(X,Z) :- adviser(X,Y), academicAncestor(Y,Z).
    new Rule(
        new Atom('academicAncestor', [new Var('X'), new Var('Z')]), [
            new Atom('adviser', [new Var('X'), new Var('Y')]),
            new Atom('academicAncestor', [new Var('Y'), new Var('Z')])
        ]
    )
]

//////////////////////////////////////////////////////////////////////

@Component
export default class Datalog extends Vue {

}
</script>
