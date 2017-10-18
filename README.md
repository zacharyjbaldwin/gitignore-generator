# gitignore-generator

A command line tool to generate default .gitignore files by GitHub.

## Installation

Download and install the app globally as shown below:

```bash
$ git clone https://www.github.com/zacharyjbaldwin/gitignore-generator.git
$ cd gitignore-generator
$ npm install
$ npm install -g
```

## Usage

Once the app is installed you can run:

```bash
$ gitignore --language [language]
```

Alternatively, you can use the shorthand command like shown:

```bash
$ gi -l [language]
```

## Examples

* Fetch a Java-brand .gitignore file:

```bash
$ gitignore --language java
```

* Fetch a default Node .gitignore file:

```bash
$ gi -l node
```

## License

MIT License
