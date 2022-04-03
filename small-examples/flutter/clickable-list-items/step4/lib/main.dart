import 'dart:collection';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Clickable List Items'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final List<String> categories = <String>['cats', 'dogs', 'chickens', 'pizza'];

  // When a user clicks a category, we save the category here.
  final Set<String> taggedCategories = HashSet<String>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          SizedBox(
            height: 50,
            width: 150,
            child: ElevatedButton(
              onPressed: () {
                // When the navigation button is clicked, send the tagged
                // categories to the new page as a list.
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => SelectedCategoriesPage(
                          selected: taggedCategories.toList())),
                );
              },
              child: const Text('To Selected Categories'),
            ),
          ),
          SizedBox(
            height: 400,
            child: ListView.builder(
              padding: const EdgeInsets.all(8),
              itemCount: categories.length,
              itemBuilder: (BuildContext context, int index) {
                // For every category button, include the category name and the
                // taggedCategories set.  Each button will add or remove the
                // category when the button is clicked.
                return MyButton(
                    text: categories[index],
                    taggedCategories: taggedCategories);
              },
            ),
          ),
        ],
      ),
    );
  }
}

class MyButton extends StatefulWidget {
  final String text;

  // When a button is clicked, we add or remove the category text from
  // taggedCategories.
  final Set<String> taggedCategories;

  MyButton({Key? key, required this.text, required this.taggedCategories})
      : super(key: key);

  @override
  State<MyButton> createState() => _MyButtonState();
}

class _MyButtonState extends State<MyButton> {
  bool _isClicked = false;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        setState(() {
          _isClicked = !_isClicked;
          // Update taggedCategories.  We have to modify state in the widget.
          if (_isClicked) {
            widget.taggedCategories.add(widget.text);
          } else {
            widget.taggedCategories.remove(widget.text);
          }
        });
      },
      child: Container(
        height: 50,
        margin: EdgeInsets.all(2),
        color: _isClicked ? Colors.blue : Colors.grey,
        child: Text('${widget.text}'),
      ),
    );
  }
}

class SelectedCategoriesPage extends StatelessWidget {
  // This page displays a list of categories that are created on another page.
  // The list of categories have to be included in the constructor.
  final List<String> selected;

  const SelectedCategoriesPage({Key? key, required this.selected})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Selected Categories'),
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(8),
        itemCount: selected.length,
        itemBuilder: (BuildContext context, int index) {
          return Container(
            height: 50,
            margin: EdgeInsets.all(2),
            color: Colors.grey,
            child: Text('${selected[index]}'),
          );
        },
      ),
    );
  }
}
