import 'dart:ui';

import 'package:chesterjetpack/screens/game/entities/BaseEntity.dart';
import 'package:chesterjetpack/screens/game/entities/EntityState.dart';
import 'package:flame/animation.dart';
import 'package:flame/components/animation_component.dart';
import 'package:flame/sprite.dart';
import 'package:flutter/foundation.dart';

abstract class DoubleAnimatedEntity extends BaseEntity {
  AnimationComponent _first;
  AnimationComponent _second;

  EntityState _entityState;

  Size size;
  double _x;

  DoubleAnimatedEntity(
    String firstAniPath,
    int firstAniCount,
    double firstAniSpeed,
    String secondAniPath,
    int secondAniCount,
    double secondAniSpeed,
  ) {
    List<Sprite> _sprites = List<Sprite>();

    for (int i = 0; i < firstAniCount; i++) {
      _sprites.add(Sprite('$firstAniPath$i.png'));
    }
    _first = AnimationComponent(
        0, 0, Animation.spriteList(_sprites, stepTime: firstAniSpeed));
    _sprites.clear();
    for (int i = 0; i < secondAniCount; i++) {
      _sprites.add(Sprite('$secondAniPath$i.png'));
    }

    _second = AnimationComponent(0, 0,
        Animation.spriteList(_sprites, stepTime: secondAniSpeed, loop: false));

    _entityState = EntityState.Normal;
    _x = 0;
  }

  @mustCallSuper
  bool overlapsSuper(Rect rect) {
    if (_entityState == EntityState.Normal)
      return _first.toRect().overlaps(rect);
    else
      return _second.toRect().overlaps(rect);
  }

  @mustCallSuper
  void renderSuper(Canvas canvas) {
    canvas.save();
    if (_entityState == EntityState.Normal) {
      _first.x = _x - _first.width / 2;
      _first.render(canvas);
    } else {
      _second.x = _x - _second.width / 2;
      _second.render(canvas);
    }
    canvas.restore();
  }

  @mustCallSuper
  void superResize(
    Size size, {
    double fWR = 0,
    double fHR = 0,
    double sWR = 0,
    double sHR = 0,
    double yR = 0,
  }) {
    this.size = size;

    _first.width = size.width * fWR;
    _first.height = size.height * fHR;
    _first.y = size.height * yR - _first.height / 2;

    _second.width = size.width * sWR;
    _second.height = size.height * sHR;
    _second.y = size.height * yR - _second.height / 2;

    _x = size.width + _first.width;
  }

  @mustCallSuper
  void updateSuper(double t, {double normalFact = 2, double dyingFactor = 4}) {
    if (_entityState == EntityState.Normal) {
      _x -= t * size.width / normalFact;
      _first.update(t);
    } else {
      _x -= t * size.width / dyingFactor;
      _second.update(t);
      if (_second.animation.done() || _x < 0) {
        _second.animation.reversed(); // safety measure
        _entityState = EntityState.Dead;
      }
    }
  }

  @mustCallSuper
  bool isDeadSuper() {
    return _entityState == EntityState.Dead;
  }

  @mustCallSuper
  void hitSuper() {
    _entityState = EntityState.Dying;
  }
}