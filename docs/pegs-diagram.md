# PEGS Diagram


Reference: https://mermaid-js.github.io/mermaid/#/entityRelationshipDiagram

```mermaid
classDiagram

%% invariant requirements.project == this
%% invariant upTraceability: isUpTraceable = (across artifacts as art all art.item.isUpTraceable)
%% invariant downTraceability: (across requirements.items as req all
%%                                  across artifacts as art some art.item.follows (req.item)
%%                              )
class Project {
    Boolean isUpTraceable
    Boolean isDownTraceable
}

class Environment

class Goal

class System

%% invariant project.requirements == this
class Requirements

%% invariant isComposite() == true implies subRequirements.length > 0 
class Requirement {
    Guid id
    Predicate property
    Boolean isComposite()
}

%% invariant isSameProject: follows != null implies follows.project = project
%% invariant isUpTraceable: isUptraceable implies follows != null
class Artifact {
    Boolean isUpTracabeable
}

class Stakeholder

class Property

class Program
Program --|> Artifact

class Component
Component --|> Requirement

class Actor
Actor --|> Component

class Goal
Goal --|> Requirement

class Behavior
Behavior --|> Requirement

class Task
Task --|> Requirement

class Product
Product --|> Requirement

class Constaint
Constraint --|> Requirement

class Role
Role --|> Requirement

class Limit
Limit --|> Requirement

class Lack
Lack --|> Requirement



Artifact "1" --> "1" Project : project
Artifact "1" --> "0-1" Requirement : follows

Project "1" --> "1" Requirements : requirements
Project "1" --> "*" Artifact : artifacts

Requirement "1" --> "*" Requirement : subRequirements

Requirements "1" --> "1" Project : project
Requirements "1" --> "*" Requirement : items

Property "1" --> "*" Stakeholder: relevantTo

```

## Project

The set of human processes involved in the planning, construction, revision and operation of a system

### Up Traceability

### Down Traceability

For every requirement at least one artifact follows from it.

## Environment

The set of entities (people, organizations, regulations, devices and other material objects, other systems) external to the project or system but with the potential to affect it or be affected by it.

## Goal

## System

A set of related artifacts

## Requirements

## Requirement

A statement of a relevant project, system or environment property

### Property

Boolean predicate

**Elementary** or **Composite**

**Homogeneuous** or **Heterogeneous**

**Homogeneous** example: "customers will have access to customer functions, and employees to both customer and flight management functions"

**Heterogeneous** example: "Error messages shall be recorded in a log"
Refers to a system component(log) and a system behavior

### Statement

Human-readable expression of a property

## Artifact

### Up Traceability

Every element of every artifact follows from some element of the requirements